## This script is for the Jenkins job

if [ ! "$TI_ROOT" ]; then
    echo "\$TI_ROOT not defined. Exiting."
    exit 1
fi

JSDUCK_DIR=$TI_ROOT/jsduck
TI_DIR=$TI_ROOT/titanium_mobile
ALLOY_DIR=$TI_ROOT/alloy
CORE_MOTION_DIR=$TI_ROOT/appc_modules/ti.coremotion
FB_DIR=$TI_ROOT/appc_modules/ti.facebook
GEOFENCE_DIR=$TI_ROOT/appc_modules/ti.geofence
HTTPS_DIR=$TI_ROOT/appc_modules/appcelerator.https
MOD_DIR=$TI_ROOT/titanium_modules
MAP_DIR=$TI_ROOT/appc_modules/ti.map
NFC_DIR=$TI_ROOT/appc_modules/ti.nfc
NEWSSTAND_DIR=$TI_ROOT/appc_modules/ti.newsstand
TIZEN_DIR=$TI_ROOT/titanium_mobile_tizen
TOUCHID_DIR=$TI_ROOT/appc_modules/ti.touchid

## Error handling
fail_on_error() {
    if [ $# -ne 2 ] ; then
        echo "Wrong number of arguments."
        exit 1
    fi
    if [ $1 -ne 0 ] ; then
        echo "Error: " $2
        exit 1
    fi
}



## $1 - repo name
## $2 - repo dir
## $3 - repo remote name / upstream project
## $4 - repo branch
## $5 - repo account
function repo_update {
    echo "Attempting to update the $1 repo on $3/$4..."

    ## Checkout repos if they don't exist
    if [ ! -d $2 ]; then
        cd $TI_ROOT
        if [ "$5" = "appcelerator-modules" ]; then
            cd ${TI_ROOT}/appc_modules
        fi
        git clone git://github.com/${5}/${1}.git
    fi

    cd $2
    git fetch $3
    git checkout $4
    fail_on_error $? "Could not checkout $3/$4 for the $1 repo"
    git pull $3 $4
    fail_on_error $? "Pull failed for $1 repo"
}

if [ ! -d "${TI_ROOT}/appc_modules" ]; then
    mkdir -p $TI_ROOT/appc_modules
    echo "making directory"
fi

repo_update jsduck $JSDUCK_DIR origin master appcelerator
repo_update titanium_mobile $TI_DIR origin master appcelerator
repo_update alloy $ALLOY_DIR origin master appcelerator
repo_update titanium_modules $MOD_DIR origin master appcelerator
repo_update ti.coremotion $CORE_MOTION_DIR origin master appcelerator-modules
repo_update ti.facebook $FB_DIR origin master appcelerator-modules
repo_update ti.map $MAP_DIR origin master appcelerator-modules
repo_update ti.nfc $NFC_DIR origin master appcelerator-modules
repo_update ti.newsstand $NEWSSTAND_DIR origin master appcelerator-modules
repo_update titanium_mobile_tizen $TIZEN_DIR origin 3_2_X appcelerator
repo_update ti.touchid $TOUCHID_DIR origin master appcelerator

echo "Repo updates completed"

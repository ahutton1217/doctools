if [ ! $TI_ROOT ]; then
    echo "Error: \$TI_ROOT not defined!  Exiting..."
fi
sh repo_update.sh
outdir=$TI_ROOT/doctools/dist/titanium/3.0
rm -rf $outdir
mkdir -p $outdir
cd $TI_ROOT/doctools
rm -rf $outdir
sh deploy.sh -o alloy -o modules -g htmlguides -d $outdir prod -s
rm -rf ~/Sites/titanium/3.0
rm -rf ~/Sites/titanium/landing
cp -rf $outdir ~/Sites/titanium/3.0
cp -rf $TI_ROOT/appc_web_docs/titanium/landing ~/Sites/titanium/.

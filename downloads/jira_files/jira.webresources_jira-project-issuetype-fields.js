;
/* module-key = 'jira.webresources:jira-project-issuetype-fields', location = '/includes/jira/field/ProjectIssueTypeSelect.js' */
define("jira/field/project-issue-type-select",["jira/lib/class"],function(Class){return Class.extend({init:function(options){var val,instance=this;this.$project=options.project;this.issueTypeSelect=options.issueTypeSelect;this.$projectIssueTypesSchemes=options.projectIssueTypesSchemes;this.$issueTypeSchemeIssueDefaults=options.issueTypeSchemeIssueDefaults;this.projectIssueTypeSchemes=JSON.parse(this.$projectIssueTypesSchemes.html());this.issueTypesSchemeDefaults=JSON.parse(this.$issueTypeSchemeIssueDefaults.html()||"[]");if(instance.$project.length>0){val=instance.$project.val();instance.setIssueTypeScheme(instance.getIssueTypeSchemeForProject(val));this.$project.change(function(){var val=instance.$project.val();instance.setIssueTypeScheme(instance.getIssueTypeSchemeForProject(val))})}},getIssueTypeSchemeForProject:function(projectId){return this.projectIssueTypeSchemes[projectId]},getDefaultIssueTypeForScheme:function(issueTypeSchemeId){return this.issueTypesSchemeDefaults[issueTypeSchemeId]},setIssueTypeScheme:function(issueTypeSchemeId){var selectedIssueType=this.issueTypeSelect.model.getValue();this.issueTypeSelect.model.setFilterGroup(issueTypeSchemeId);if(!this.issueTypeSelect.model.setSelected(selectedIssueType,false)){this.setDefaultIssueType(issueTypeSchemeId)}this.issueTypeSelect.model.$element.data("project",this.$project.val())},setDefaultIssueType:function(issueTypeSchemeId){var defaultIssueType=this.getDefaultIssueTypeForScheme(issueTypeSchemeId),descriptor=this.issueTypeSelect.model.getDescriptor(defaultIssueType);if(!descriptor){descriptor=this.issueTypeSelect.model.getAllDescriptors()[0]}this.issueTypeSelect.setSelection(descriptor,false)}})});AJS.namespace("JIRA.ProjectIssueTypeSelect",null,require("jira/field/project-issue-type-select"));;
;
/* module-key = 'jira.webresources:jira-project-issuetype-fields', location = '/includes/jira/field/initProjectIssueTypeSelect.js' */
define("jira/field/init-project-issue-type-select",["jira/ajs/select/suggestion-collection-model","jquery","jira/ajs/select/single-select","jira/util/events/reasons","jira/util/events/types","jira/util/events","jira/field/project-issue-type-select"],function(SuggestionCollectionModel,jQuery,SingleSelect,Reasons,Types,Events,ProjectIssueTypeSelect){function findProjectAndIssueTypeSelectAndConvertToPicker(ctx){var $ctx=ctx||jQuery("body");$ctx.find(".issuetype-field").each(function(index){var $project=$ctx.find(".project-field, .project-field-readonly"),$issueTypeSelect=jQuery(this),$projectIssueTypes=$ctx.find("#"+$issueTypeSelect.attr("id")+"-projects"),$defaultProjectIssueTypes=$ctx.find("#"+$issueTypeSelect.attr("id")+"-defaults"),issueTypeSelect=new SingleSelect({element:$issueTypeSelect,revertOnInvalid:true,model:SuggestionCollectionModel});issueTypeSelect.model.remove("");if($project.length>0){new ProjectIssueTypeSelect({project:$project.eq(index),issueTypeSelect:issueTypeSelect,projectIssueTypesSchemes:$projectIssueTypes,issueTypeSchemeIssueDefaults:$defaultProjectIssueTypes})}})}Events.bind(Types.NEW_CONTENT_ADDED,function(e,context,reason){if(reason!==Reasons.panelRefreshed){findProjectAndIssueTypeSelectAndConvertToPicker(context)}})});;
;
/* module-key = 'jira.webresources:jira-project-issuetype-fields', location = '/includes/jira/field/initIssueTypePickers.js' */
(function(){function createissueTypePicker(context){context.find(".issuetype-field").each(function(){var $select=jQuery(this);$select.bind("reset",function(){$select.find("option[value='']").remove()}).trigger("reset");new AJS.SingleSelect({element:this,revertOnInvalid:true})})}})();;
;
/* module-key = 'jira.webresources:jira-project-issuetype-fields', location = '/includes/jira/field/initProjectPickers.js' */
define("jira/field/init-project-pickers",["jira/ajs/select/scrollable-single-select","jira/ajs/select/suggestion-collection-model","jira/util/events/reasons","jira/util/events/types","jira/util/events"],function(ScrollableSingleSelect,SuggestionCollectionModel,Reasons,Types,Events){function createProjectPicker(context){context.find(".project-field").each(function(){new ScrollableSingleSelect({element:this,revertOnInvalid:true,pageSize:50,pagingThreshold:100,model:SuggestionCollectionModel})})}Events.bind(Types.NEW_CONTENT_ADDED,function(e,context,reason){if(reason!==Reasons.panelRefreshed){createProjectPicker(context)}})});;
;
/* module-key = 'jira.webresources:jira-project-issuetype-fields', location = '/includes/jira/field/init/init-jira-project-issuetype-fields-webresource.js' */
require("jira/field/init-project-issue-type-select");require("jira/field/init-project-pickers");;
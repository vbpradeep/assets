import { TicketApiPaths } from '@api/ticketModuleAPI';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { getCurrentDate, itemTemplateMapping } from '@core/util';
import { CustomODataAdaptor } from '@core/customDmAdaptor';
import { ICustomFormBuild } from '@sharedModules/formBuild/model/formInterface';
import { ApplicationApiPaths } from '@api/appAPI';
import { columnDropdownFieldMapper } from '@/constants/appSettings';
import { getDueDatePresets, getCreatedOnPreset } from '@modules/tickets/constants/filterPreset';
import { getLocale } from '@asset/i18n/locale';
import * as priorityList from './priority.json';

export const responseTime = [
    { id: 'overdue', name: 'Overdue' },
    { id: 'today', name: 'Today' },
    { id: 'tomorrow', name: 'Tomorrow' },
    { id: 'next24hours', name: 'Next 24 hours' },
    { id: 'next8hours', name: 'Next 8 hours' },
    { id: 'next4hours', name: 'Next 4 hours' },
    { id: 'next2hours', name: 'Next 2 hours' },
    { id: 'nexthour', name: 'Next hour' },
    { id: 'next30minutes', name: 'Next 30 minutes' }
];

export function getFilterStaticData(): ICustomFormBuild {
    const filterStaticData: ICustomFormBuild = {
        isVertical: true,
        formName: '',
        disableActionButtons: true,
        formComponents: [
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'brands',
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('BRAND'),
                mode: 'CheckBox',
                showClear: true,
                dataSource: new DataManager({
                    url: ApplicationApiPaths.Brand,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: { value: 'key', text: 'text' },
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                label: getLocale('AGENT'),
                inputType: 'dropdown',
                formControllerName: 'agents',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                fields: { value: 'userId', text: 'displayName' },
                dataSource: new DataManager({
                    url: TicketApiPaths.Assignee,
                    adaptor: new CustomODataAdaptor(),
                }),
                itemTemplate: itemTemplateMapping(),
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'groups',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('GROUP'),
                dataSource: new DataManager({
                    url: TicketApiPaths.Group,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: { value: 'groupID', text: 'groupName' },
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'status',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('STATUS'),
                dataSource: new DataManager({
                    url: TicketApiPaths.Status,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                query: new Query().addParams('isNewStatusRequired', 'true'),
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'priority',
                mode: 'CheckBox',
                showClear: true,
                value: '',
                label: getLocale('PRIORITY'),
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                dataSource: priorityList['default'],
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'categories',
                mode: 'CheckBox',
                showClear: true,
                value: '',
                label: getLocale('CATEGORY'),
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                dataSource: new DataManager({
                    url: TicketApiPaths.Category,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                label: getLocale('REQUESTOR'),
                inputType: 'dropdown',
                mode: 'CheckBox',
                showClear: true,
                formControllerName: 'requester',
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                fields: { value: 'userId', text: 'displayName' },
                dataSource: new DataManager({
                    url: TicketApiPaths.Requester,
                    adaptor: new CustomODataAdaptor(),
                }),

                itemTemplate: itemTemplateMapping(),
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                label: getLocale('CREATEDBY'),
                inputType: 'dropdown',
                formControllerName: 'createdby',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                fields: { value: 'userId', text: 'displayName' },
                dataSource: new DataManager({
                    url: TicketApiPaths.Requester,
                    adaptor: new CustomODataAdaptor(),
                }),

                itemTemplate: itemTemplateMapping(),
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'daterange',
                inputType: 'date',
                formControllerName: 'createdon',
                placeholder: getLocale('DATETIMEPICKERPLACEHOLDER'),
                value: '',
                max: getCurrentDate(false),
                dateFormat: 'MMM dd, yy',
                label: getLocale('CREATEDDATE'),
                presets: getCreatedOnPreset()
            },
            {
                type: 'daterange',
                inputType: 'date',
                formControllerName: 'closedon',
                placeholder: getLocale('DATETIMEPICKERPLACEHOLDER'),
                value: '',
                max: getCurrentDate(false),
                dateFormat: 'MMM dd, yy',
                label: getLocale('CLOSEDDATE'),
                presets: getCreatedOnPreset()
            },
            {
                type: 'dropdown',
                inputType: 'dropdown',
                formControllerName: 'responsedue',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('DROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('RESPONSEDUE'),
                dataSource: responseTime,
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'daterange',
                inputType: 'date',
                formControllerName: 'resolutiondue',
                placeholder: getLocale('DATETIMEPICKERPLACEHOLDER'),
                value: '',
                dateFormat: 'MMM dd, yy',
                label: getLocale('RESOLUTIONDUE'),
                presets: getDueDatePresets()
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'source',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('SOURCE'),
                dataSource: new DataManager({
                    url: TicketApiPaths.SourceCollection,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'tags',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('TAGS'),
                dataSource: new DataManager({
                    url: TicketApiPaths.Tags,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'type',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('TYPE'),
                dataSource: new DataManager({
                    url: TicketApiPaths.Type,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            },
            {
                type: 'multiSelect',
                inputType: 'dropdown',
                formControllerName: 'contactgroups',
                mode: 'CheckBox',
                showClear: true,
                placeholder: getLocale('MULTISELECTDROPDOWNPLACEHOLDER'),
                value: '',
                label: getLocale('CONTACTGROUP'),
                dataSource: new DataManager({
                    url: TicketApiPaths.ContactGroups,
                    adaptor: new CustomODataAdaptor(),
                }),
                fields: columnDropdownFieldMapper,
                filterPlaceholder: getLocale('SEARCH')
            }
        ]
    };

    return filterStaticData;
}

export interface FormEntry {
    type: FormEntryType;
    name: String;
    label: String;
    options: SelectOption[]
}

export interface Form {
    className: string;
    formEntries: FormEntry[];
}

export enum FormEntryType {
    CheckBox = 'checkBox',
    CheckBoxGroup = 'checkBoxGroup',
    Input = 'input',
    Textarea = 'textarea',
    Radio = 'radio'
}

export interface SelectOption {
    name: string;
    value: string;
}
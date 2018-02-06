import React from 'react';

export const InputComponent = ({ form, FormItem, Input, labels, idName, rules, suffix, type, onChange, placeholder }) => {
    const { getFieldDecorator, setFieldsValue } = form;

    return (
        <FormItem
            label={ labels }
        >
            {
                getFieldDecorator(idName, {
                    rules
                })(
                    <Input 
                        type={ type }
                        suffix={ suffix }
                        onChange={ onChange }
                        placeholder={ placeholder }
                    />
                )
            }
        </FormItem>
    );
}

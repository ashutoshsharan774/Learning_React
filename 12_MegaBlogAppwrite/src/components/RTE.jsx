//real time text editor //could have used forwardref instead
import React from 'react'
import {Editor} from '@tinymce/tinymce-react'//read documentation
import {Controller} from 'react-hook-form'
//In React Hook Form, the Controller component is used to integrate controlled components (like input fields, checkboxes, etc.) with the form. It provides a way to connect form fields to the form state managed by React Hook Form.
/*name: Specifies the name of the field, which is used as an identifier in the form data.
control: The instance of useForm that you get from react-hook-form.//control is component se control passon krega jo bhi isko call krega uske andar 
defaultValue: The initial value of the field.
render: A function that takes an object containing field as its argument. field contains the necessary props that need to be spread onto the input component for it to be controlled by React Hook Form.

By using Controller, you can easily integrate your form fields with React Hook Form's state management and validation capabilities.
*/

//js inject krke label diya

export default function RTE({name,control,label,defaultValue='',}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'> {label} </label>} 
            <Controller
                name={name || 'content'}//these are given by controller itself -read documnetation in usehookform controller
                control={control} //calls parent component/element so that parent component can use state,data of this component
                render={({field:{onChange}})=>( //jo bhi hume render krana ha for eg:i/p field lelo, editor ho toh wo lelo

                    <Editor
                    apiKey='qpcrzq1lbg9hc5nwc2cbx10tjyfz43drbm9but9i418okn2f'
                    
        initialValue={defaultValue}
        init={{ //initialize hote hi editor ke inside ky values chahte h
            initialValue: defaultValue,//by default ky aana chahiye
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}//editor pr kuch bhi change  ho toh hmare field govern ho rhe h onChnage se
        //to use it we just need to pass rte(label) over there and take control 
        />
                )}
            />
        </div>
    )
}



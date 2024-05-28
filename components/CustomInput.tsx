
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { authFormSchema } from "@/lib/utils"

import { Input } from "@/components/ui/input"
import { z } from "zod"
import { Control, FieldPath } from "react-hook-form"

const formSchema = authFormSchema('sign-up')

interface CustomInput{
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  title: string
  placeholder: string

}

const CustomInput = ({ control, name, title, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className="form-label">
            {title}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage
              className="form-mesage mt-2"
            />

          </div>
        </div>
        
      )}
    />
  )
}

export default CustomInput
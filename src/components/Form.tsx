"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import {
    DepartmentSelect,
    SystemSelect
 } from "./Select"


const formSchema = z.object({
  body: z.string().nonempty({message: "Body text is required"}),
  department: z.string().nonempty({ message: "Department is required" }),
  system: z.string().nonempty({ message: "System is required" }),
})

export function InquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        body: "",
        department: "",
        system: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField      
          control={form.control}
          name="department"
          render={() => (
            <FormItem>
              <FormControl>
                <Controller
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <DepartmentSelect
                      placeholder="部署コード"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="system"
          render={() => (
            <FormItem>
              <FormControl>
                <Controller
                  control={form.control}
                  name="system"
                  render={({ field }) => (
                    <SystemSelect
                      placeholder="システム名"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} /> 
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">送 信</Button>
      </form>
    </Form>
  )
}

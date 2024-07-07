import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from '@components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage
} from '@components/ui/form';
import { Input } from '@components/ui/input';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }).max(50, { message: 'Name must be less than 50 characters' }),
  });

export default function Header(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
      });
    
      // Handle form submission
      const onSubmit = (data) => {
        console.log(data);
      };
      
      return (
        <div>
          <h1>Hello</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormField>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...register('name')} />
                {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
              </FormControl>
              <FormDescription>Enter your name</FormDescription>
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
    }
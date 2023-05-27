import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
}

export default function Form() {
  const {register, watch, handleSubmit, formState: {errors}} = useForm<Inputs>();
  watch(console.log);

  const onSubmit = console.log

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>input text</label>
        <input type="text" {...register("name")} />

        <input type="submit" />
      </form>
    </>
  );
}
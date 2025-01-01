import './App.css'
import { useForm } from "react-hook-form"
function App() {
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data){
    await new Promise((resolve, reject) => {
      setTimeout(resolve,5000);
    })
    console.log("submitting the form ", data)
  }

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>First Name: </label>
        <input className={errors.firstName ? "input-error": ""}
         {...register('firstName',
          {
             required: true,
              minLength: {value: 3,
              message:'Min length atleast 3'}, maxLength: {value:6, message: 'Max length alteast 6'}})} />
  
              {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label >Middle Name: </label>
        <input className={errors.middleName ? "input-error": ""} {...register('middleName')} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input className={errors.lastName ? "input-error": ""} {...register('lastName',{
           pattern: {
          value: /^[A-Za-z]+$/i,
          message: "Last Name is not as per rules"
          } })} />
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br />
      <div>
        <input type="submit"  
        disabled={isSubmitting}
        value={isSubmitting? "Submitting": "Submit"}
        />
      </div>
     </form>

     
    </>
  )
}

export default App

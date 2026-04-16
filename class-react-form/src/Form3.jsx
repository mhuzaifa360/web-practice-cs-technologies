import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div className='bg-slate-300 p-10 w-[500px] h-[350px] ml-72 mt-5 rounded-md'>
    <h1>input 2 numbers to add</h1>
    <Formik
      initialValues={{ num1: 0, num2: 0}}
      validate={values => {
        const errors = {};
        if (!values.num1) {
          errors.num1 = 'Required';
        }
        return errors;
      }}
      addTwoNumbers={(num1, num2) => {
        return num1 + num2
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        addTwoNumbers,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-8 '>
          <input
            type="number"
            name="num1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.num1}
            className='border-2 rounded-md w-[300px] p-2 border-zinc-400'
        //   placeholder='number 1'
            />
          {errors.num1 && <p>{errors.num1}</p>}
          <input
            type="number"
            name="num2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.num2}
            className='border-2 rounded-md w-[300px] p-2 border-zinc-400'
            // placeholder='number 2'
            />
          {errors.num2 && <p>{errors.num2}</p>}
          <input
            type="text"
            name="result"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.num2 && values.num1 + values.num2}
            className='border-2 rounded-md w-[300px] p-2 border-zinc-400'
            // placeholder={addTwoNumbers}
            />
            {errors.result && <p>{errors.result}</p>}
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
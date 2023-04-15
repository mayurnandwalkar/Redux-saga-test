import { useEffect } from 'react'
import './App.css'
import { useForm } from "react-hook-form";
import { TextField, Button, FormControl } from '@mui/material';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from "react-redux";
import { loadDataStart,updateDataStart } from "./redux/actions";
import List from './List';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('User Name is required')
});
function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  useEffect(() => {
    return () => {
        dispatch(loadDataStart());
    }
  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data) => {
    dispatch(updateDataStart({name:data.username}));
  };
  return (
    <>
      <h1>My App</h1>
      <div className="cstm">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl fullWidth margin="normal">
            <TextField label="Name" name="username" {...register('username')} error={!!errors.username} helperText={errors.username?.message}/>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </FormControl>
        </form>
        <List/>
      </div>
    </>
  )
}

export default App

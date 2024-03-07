import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null,
    loading: null,
    error: null
};

const getAll = createAsyncThunk(
    'carsSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data} = await carService.getAll();
            return data
            // return thunkAPI.fulfillWithValue(data)
        }catch (e){
            // console.log(error)
            // return thunkAPI.rejectWithValue(error)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carsSlice/create',
    async ({car}, thunkAPI)=> {
        try {
            const {data} = await carService.create(car);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carsSlice/updateById',
    async ({id, carData}, thunkAPI)=> {
        try {
            const {data} = await carService.updateById(id, carData);
            return data
        }catch (e){

            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carsSlice/deleteById',
    async ({id}, thunkAPI)=>{
        try {
             await carService.deleteByd(id);
        }catch (e){

            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(create.fulfilled, state => {})
            .addCase(updateById.fulfilled, state =>{
                state.carForUpdate = null
            })

            .addMatcher(isFulfilled(create, updateById, deleteById), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(getAll), (state, action) =>{
                state.loading = false
                state.error = null
            } )
            .addMatcher(isPending(getAll), state => {
                state.loading = true
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.error = action.payload.detail
                state.loading = false
            })
})


const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    updateById,
    deleteById
}

export {
    carReducer,
    carActions
}
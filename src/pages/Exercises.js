import React, { Fragment } from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

const Exercises = ({data}) => (
  <Fragment>
    <Welcome
      username="Mauricio"
    />
    <ExerciseList
      exercises={data}
    />
    <AddButton />
  </Fragment>
)

export default Exercises

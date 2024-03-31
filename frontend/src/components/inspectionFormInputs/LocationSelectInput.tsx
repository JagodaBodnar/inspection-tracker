import { fetchAllAreas } from '../../api/api.ts';
import { setSelectedLocation } from '../../store/slices/InspectionFormSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { UseFormRegister, UseFormResetField } from 'react-hook-form';
import { Inputs } from '../../types/types.ts';

type LocationSelectInputProp = {
  register: UseFormRegister<Inputs>;
  resetField: UseFormResetField<Inputs>;
};
const LocationSelectInput = ({
  register,
  resetField,
}: LocationSelectInputProp) => {
  const locations = useSelector(
    (state: RootState) => state.inspectionForm.allLocations,
  );
  const defaultLocation = useSelector(
    (state: RootState) => state.inspectionForm.defaultLocation,
  );
  const otherLocations = useSelector(
    (state: RootState) => state.inspectionForm.otherLocations,
  );
  const dispatch = useDispatch();
  return (
    <div className='form-field-container'>
      <label className='form-label' htmlFor='location'>
        Location
      </label>
      <select
        id='location'
        {...register('location', {
          onChange: (e) => {
            const selectedLocation = locations.filter(
              (element) => element.id === +e.target.value,
            );
            resetField('area');
            fetchAllAreas(dispatch, selectedLocation[0].id);
            dispatch(setSelectedLocation(selectedLocation[0]));
          },
        })}
        className='form-select'
      >
        <option value={defaultLocation.name}>{defaultLocation.name}</option>
        {otherLocations.map((element) => {
          const { name, id } = element;
          return (
            <option value={id} key={id}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LocationSelectInput;
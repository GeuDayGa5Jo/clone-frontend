import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import validate from "./validate";

// 초깃값과 addPost할 thunk함수를 준다.
function useForm({ initialValues, onSubmit, isModalOpen }) {
  // const dispatch = useDispatch();
  // values를 초깃값으로 세팅
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // input값에 변화가 발생하면 setValues에 변화를 반영
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // submit된다면
  const handleSubmit = async (event) => {
    setSubmitting(true);
    event.preventDefault();

    setErrors(validate(values));
    console.log(errors);
    // 다시 초기값으로 세팅
    // setValues(initialValues);
  };

  useEffect(() => {
    // submit이 되어서 submitting값이 true가 된다면
    if (submitting) {
      // 위에 validate로 검증해서 바뀐 errors 객체의 key값이 없으면 onSubmit에 값을 넣어준다.
      if (Object.keys(errors).length === 0) {
        const sumDate = "".concat(
          values.month,
          "/",
          values.day,
          "/",
          values.year
        );
        values.DOB = sumDate;
        delete values.year;
        delete values.month;
        delete values.day;
        isModalOpen(false);
        // form의 input 값들을 dispatch해준다.
        // 수정일때랑 그냥 작성할때 action을 다르게 dispatch

        // dispatch(__addPost({ ...values }));
        // 작성완료 후에는 Home으로 보낸다.
      }
      // error여부를 확인하면 submitting값을 false로 바꿔준다.
      setSubmitting(false);
    }
    // errors값이 변동이 있을시 useEffect실행.
  }, [errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;

// createdAt: new Date().getTime()

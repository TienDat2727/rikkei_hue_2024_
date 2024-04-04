import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Typography, Form, Input } from 'antd';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormIcon from './FormIcon';
import { ContainerForm } from './FormContainer.styled';
import { BaseButton } from 'components/common/BaseButton/BaseButton';
import {
  Data,
  FormLoginType,
  FormRegisterType,
  TypeActivePanel,
} from 'interfaces/interfaces';
import { dataSignIn, dataSignUp } from 'constants/constants';
import { WrapperFormItem } from './WrapperFormItem.styled';
import { useDispatch } from 'react-redux';
import {
  loginRequest,
  registerRequest,
} from '../../../redux/actions/authAction';

const { Title } = Typography;

type FormContainerProps = {
  state: TypeActivePanel;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address'
    ),

  password: yup.string().min(8).max(32).required(),
});

const schema1 = yup.object().shape({
  name: yup.string().min(8).max(32).required(),
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Invalid email address'
    ),

  password: yup.string().min(8).max(32).required(),
});

const FormContainer = ({ state }: FormContainerProps) => {
  const [formData, setFormData] = useState<Data>(dataSignIn);
  const checkSignIn = state === 'sign-in';
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormLoginType | FormRegisterType>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver<FormLoginType | FormRegisterType>(
      checkSignIn ? schema : schema1
    ),
  });
  let timeoutId: NodeJS.Timeout;

  function returnData(): Promise<Data> {
    return new Promise(resolve => {
      timeoutId = setTimeout(() => {
        const data = state === 'sign-in' ? dataSignIn : dataSignUp;
        resolve(data);
      }, 300);
    });
  }

  console.log(errors);

  useEffect(() => {
    returnData().then(data => {
      setFormData(data);
    });
    reset();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [state]);

  const handleSubmitForm = (values: FormRegisterType | FormLoginType) => {
    // if (!('username' in values)) {
    //   console.log('Đã vào đây 2');
    //   dispatch(loginRequest(values));
    //   console.log(dispatch(loginRequest(values)));
    // } else if (
    //   'username' in values &&
    //   'email' in values &&
    //   'password' in values
    // ) {
    //   console.log('Đã vào đây 3');
    //   dispatch(registerRequest(values as FormRegisterType));
    //   console.log(dispatch(registerRequest(values as FormRegisterType)));
    // }
    if (checkSignIn) {
      dispatch(loginRequest(values));
      console.log(dispatch(loginRequest(values)));
    } else {
      dispatch(registerRequest(values as FormRegisterType));
      console.log(dispatch(registerRequest(values as FormRegisterType)));
    }
  };

  return (
    <ContainerForm className={`${state}`}>
      <Form onFinish={handleSubmit(handleSubmitForm)}>
        <Title level={1}>{formData.title}</Title>
        <span className='sub-title'>{formData.subTitle1}</span>
        <FormIcon />
        <WrapperFormItem>
          {formData.fieldInput.map(value => (
            <Controller
              key={value.name}
              name={value?.name}
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Form.Item
                    validateStatus={fieldState.error?.message ? 'error' : ''}
                    help={fieldState.error?.message || null}
                  >
                    {value.name === 'password' ? (
                      <Input.Password {...field} placeholder={value.label} />
                    ) : (
                      <Input {...field} placeholder={value.label} />
                    )}
                  </Form.Item>
                );
              }}
            />
          ))}
        </WrapperFormItem>
        <a href='#a'>{formData.subTitle2}</a>

        <BaseButton htmlType='submit'>{formData.contentButton}</BaseButton>
      </Form>
    </ContainerForm>
  );
};

export default FormContainer;

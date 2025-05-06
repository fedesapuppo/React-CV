import * as Yup from 'yup';

const phoneRegExp = /^\+?[0-9]+$/;

export const cvSchema = Yup.object().shape({
  generalInfo: Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number must contain only numbers and may start with +')
      .required('Phone number is required')
  }),
  education: Yup.array()
    .of(
      Yup.object().shape({
        schoolName: Yup.string()
          .required('School name is required'),
        titleOfStudy: Yup.string()
          .required('Title of study is required'),
        startDate: Yup.date()
          .required('Start date is required'),
        endDate: Yup.date()
          .required('End date is required')
          .min(Yup.ref('startDate'), 'End date must be after start date')
      })
    )
    .min(1, 'At least one education entry is required')
    .test('all-required', 'All education entries must be completed', function(value) {
      if (!value) return false;
      return value.every(entry =>
        entry.schoolName &&
        entry.titleOfStudy &&
        entry.startDate &&
        entry.endDate
      );
    }),
  experience: Yup.array()
    .of(
      Yup.object().shape({
        companyName: Yup.string()
          .required('Company name is required'),
        position: Yup.string()
          .required('Position is required'),
        responsibilities: Yup.string()
          .required('Responsibilities are required'),
        startDate: Yup.date()
          .required('Start date is required'),
        endDate: Yup.date()
          .required('End date is required')
          .min(Yup.ref('startDate'), 'End date must be after start date')
      })
    )
    .min(1, 'At least one work experience entry is required')
    .test('all-required', 'All work experience entries must be completed', function(value) {
      if (!value) return false;
      return value.every(entry =>
        entry.companyName &&
        entry.position &&
        entry.responsibilities &&
        entry.startDate &&
        entry.endDate
      );
    })
});
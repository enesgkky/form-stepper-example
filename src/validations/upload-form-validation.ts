import * as Yup from 'yup';

export const formValidation = Yup.object().shape({

    /*
    * @param step: number
    * Step'i normalde schema'da tanımlamamıza gerek yok ama when fonksiyonu
    * ile step'e göre validasyon yapacağımız için tanımlıyoruz.
    */

    step: Yup.number().required(),

    // Step 1
    firstName: Yup.string().when('step', {
        is: 1,
        then: (schema) => schema.required('Name is required'),
    }),

    surname: Yup.string().when('step', {
        is: 1,
        then: (schema) => schema.required('Surname is required'),
    }),

    // Step 2
    age: Yup.string().when('step', {
        is: 2,
        then: (schema) => schema.required('Age is required')
    }),
    gender: Yup.string().when('step', {
        is: 2,
        then: (schema) => schema.required('Gender is required')
    }),


    // Step 3
    job: Yup.string().when('step', {
        is: 3,
        then: (schema) => schema.required('Job is required')
    }),
    socialLink: Yup.string().when('step', {
        is: 3,
        then: (schema) => schema.notRequired().url('Invalid URL')
    }),
    email: Yup.string().when('step', {
        is: 3,
        then: (schema) => schema.required('Email is required').email('Invalid email')
    }),


    // Step 4
    location: Yup.string().when('step', {
        is: 4,
        then: (schema) => schema.required('Location is required')
    }),

    file: Yup.mixed().when('step', {
        is: 4,
        then: (schema) =>
            schema
                .required('Dosya yüklenmesi zorunludur')
                .test(
                    'fileSize',
                    'Dosya boyutu 2MB geçemez',
                    (value: any) => value && value.size <= 2 * 1024 * 1024 // 2MB
                )
                .test(
                    'fileType',
                    'Sadece .jpg ve .png dosyalarına izin verilir',
                    (value: any) => value && ['image/jpeg', 'image/png'].includes(value.type)
                ),
        otherwise: (schema) => schema.notRequired(), // Diğer adımlarda zorunlu değil
    }),
}); 
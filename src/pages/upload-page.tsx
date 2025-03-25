import StepHeader from "@/components/form-components/step-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { initialValues, stepMetaData } from "@/constants";
import { formValidation } from "@/validations/upload-form-validation";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";

export default function UploadPage() {
  const submitHanle = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHanle}
        validationSchema={formValidation}
      >
        {({ values, setFieldValue, dirty, isValid, getFieldMeta }) => {
          const prevHandle = () => {
            setFieldValue("step", values.step - 1);
          };

          const nextHandle = () => {
            setFieldValue("step", values.step + 1);
          };

          return (
            <Form className="w-[600px] mx-auto py-8">
              <StepHeader
                step={values.step}
                lastStep={values.lastStep}
                stepDescription={
                  stepMetaData.find((step) => step.step === values.step)
                    ?.stepDescription || ""
                }
              />
              {values.step === 1 && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Field
                      name="firstName"
                      as={Input}
                      placeholder="First Name"
                      className={
                        getFieldMeta("firstName").error &&
                        getFieldMeta("firstName").touched &&
                        "border-red-500 placeholder-red-500"
                      }
                    />
                    <ErrorMessage
                      name="firstName"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="surname"
                      placeholder="Surname"
                      as={Input}
                      className={
                        getFieldMeta("surname").error &&
                        getFieldMeta("surname").touched &&
                        "border-red-500 placeholder-red-500"
                      }
                    />
                    <ErrorMessage
                      name="surname"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                </div>
              )}
              {values.step === 2 && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Field
                      name="age"
                      as={({ field }: FieldProps) => (
                        <Select
                          {...field}
                          value={values.age}
                          onValueChange={(value) => setFieldValue("age", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Ranges</SelectLabel>
                              <SelectItem value="0-15">Child, 0-15</SelectItem>
                              <SelectItem value="15-30">
                                Young, 15-30
                              </SelectItem>
                              <SelectItem value="30-65">
                                Adult, 30-65
                              </SelectItem>
                              <SelectItem value="65+">Olders, 65+</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                  <Field
                    name="gender"
                    placeholder="Gender"
                    as={() => (
                      <Select
                        value={values.gender}
                        onValueChange={(value) =>
                          setFieldValue("gender", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Genders</SelectLabel>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="famale">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              )}
              {values.step === 3 && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Field
                      name="job"
                      as={Input}
                      placeholder="Job"
                      className={
                        getFieldMeta("job").error &&
                        getFieldMeta("job").touched &&
                        "border-red-500"
                      }
                    />
                    <ErrorMessage
                      name="job"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="socialLink"
                      as={Input}
                      placeholder="Social link"
                    />
                    <ErrorMessage
                      name="socialLink"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                  <div>
                    <Field
                      name="email"
                      as={Input}
                      placeholder="Email"
                      className={
                        getFieldMeta("email").error &&
                        getFieldMeta("email").touched &&
                        "border-red-500"
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                </div>
              )}
              {values.step === 4 && (
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Field name="location" as={Input} placeholder="Location" />
                    <ErrorMessage
                      name="location"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                  <div>
                    <Field name="file">
                      {({ field, form }: FieldProps) => (
                        <Input
                          {...field}
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          value={undefined}
                          onChange={(e) => {
                            if (e.currentTarget.files) {
                              form.setFieldValue(
                                "file",
                                e.currentTarget.files[0]
                              );
                            }
                          }}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="file"
                      component="small"
                      className="text-xs px-0.5 text-red-500"
                    />
                  </div>
                  {!getFieldMeta("file").error && values.file && (
                    <img
                      src={URL.createObjectURL(values.file)}
                      alt="uploaded-file"
                      className="max-w-full h-auto"
                    />
                  )}
                </div>
              )}

              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {values.step > 1 ? (
                  <Button
                    className="cursor-pointer"
                    onClick={prevHandle}
                    type="button"
                  >
                    Prev
                  </Button>
                ) : (
                  <div />
                )}
                {values.step !== values.lastStep && (
                  <Button
                    className="cursor-pointer"
                    onClick={nextHandle}
                    type="button"
                    disabled={!isValid || !dirty}
                  >
                    Next
                  </Button>
                )}
                {values.step === values.lastStep && (
                  <Button
                    className="cursor-pointer"
                    type="submit"
                    disabled={!isValid || !dirty}
                  >
                    Submit
                  </Button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

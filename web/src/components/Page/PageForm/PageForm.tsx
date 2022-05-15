import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

const PageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.page?.id)
  }

  return (
    <div className="">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <TextAreaField
          name="markdown"
          defaultValue={props.page?.markdown}
          className="textarea textarea-bordered border-l-base-content font-body h-64 w-full"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="markdown" className="rw-field-error" />

        {/* <Label
          name="secret"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Secret
        </Label>

        <TextField
          name="secret"
          defaultValue={props.page?.secret}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="secret" className="rw-field-error" /> */}

        <div className="flex flex-row gap-2 py-12">
          <Link
            to={routes.page({ id: props?.page?.id })}
            className="btn btn-outline"
          >
            Cancel
          </Link>
          <Submit disabled={props.loading} className="btn btn-outline gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Save changes
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PageForm

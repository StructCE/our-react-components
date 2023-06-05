import { useState, type ChangeEvent, type FormEvent } from "react";
import { Modal } from "../index";

interface SchemaItem {
  fieldName: string;
  required: boolean;
  label?: string;
  customValidation?: (formInfo: Record<string, string>) => {
    valid: boolean;
    error: string;
  };
}

type OnValidSubmitFn = (formInfo: Record<string, string>) => void;
type OnInvalidSubmitFn = (
  formInfo: Record<string, string>,
  errors: string[]
) => void;

export function FormFactory(schema: SchemaItem[]) {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    formInfo: Record<string, string>,
    onValidSubmit: OnValidSubmitFn,
    onInvalidSubmit: OnInvalidSubmitFn
  ) => {
    event.preventDefault();

    const errors: string[] = [];
    schema.forEach((item) => {
      if (item.customValidation) {
        const { valid, error } = item.customValidation(formInfo);
        if (!valid) {
          errors.push(error);
        }
      }
    });

    if (errors.length === 0) {
      onValidSubmit(formInfo);
    } else {
      onInvalidSubmit(formInfo, errors);
    }
  };

  return function FormComponent({
    onValidSubmit,
    onInvalidSubmit,
    buttonContent,
  }: {
    onValidSubmit: OnValidSubmitFn;
    onInvalidSubmit: OnInvalidSubmitFn;
    buttonContent?: string;
  }) {
    const [formInfo, setFormInfo] = useState<Record<string, string>>({});

    const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
      fieldName: string
    ) => {
      setFormInfo({ ...formInfo, [fieldName]: event.target.value });
    };

    return (
      <form
        onSubmit={(event) =>
          handleSubmit(event, formInfo, onValidSubmit, onInvalidSubmit)
        }
        className="flex flex-col gap-5 items-center mb-4"
      >
        {schema.map((item) => {
          const { fieldName, required, label, ...attributes } = item;
          delete attributes.customValidation;

          return (
            <div key={fieldName}>
              {label && (
                <label className="text-left" htmlFor={fieldName}>
                  {label}
                </label>
              )}
              <input
                id={fieldName}
                required={required}
                value={formInfo[fieldName] || ""}
                onChange={(event) => handleChange(event, fieldName)}
                className="w-96 flex-1 inline-flex items-center justify-center py-0 px-2.5 text-sm h-9 shadow-1r focus:shadow-2r"
                {...attributes}
              />
            </div>
          );
        })}
        {buttonContent ? (
          <button
            type="submit"
            className="bg-gray-300 border-none py-[0.5em] px-[1em] hover:shadow-b focus-visible:shadow-b focus-visible:outline focus-visible:outline-orange-600 focus-visible:outline-offset-1 cursor-pointer rounded-full"
          >
            {buttonContent}
          </button>
        ) : (
          <Modal.Close asChild>
            <button
              type="submit"
              aria-label="Close"
              className="bg-gray-300 border-none py-[0.5em] px-[1em] hover:shadow-b focus-visible:shadow-b focus-visible:outline focus-visible:outline-orange-600 focus-visible:outline-offset-1 cursor-pointer rounded-full"
            >
              Add
            </button>
          </Modal.Close>
        )}
      </form>
    );
  };
}

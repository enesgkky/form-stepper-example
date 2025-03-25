interface StepHeaderProps {
  step: number;
  lastStep: number;
  stepDescription: string;
}

export default function StepHeader({
  step,
  lastStep,
  stepDescription,
}: StepHeaderProps) {
  return (
    <div className="py-4 space-y-2">
      <div>
        <span className="font-semibold text-lg">
          {step}/{lastStep}
        </span>
      </div>
      <div>
        <p>{stepDescription}</p>
      </div>
    </div>
  );
}

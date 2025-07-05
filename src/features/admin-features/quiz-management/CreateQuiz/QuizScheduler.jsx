import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import {
  DatePickerWrapper,
  SchedulerWrapper,
  SchedulerContainer,
  TimeLabel,
  Separator,
  Label,
  P,
} from "./CreateQuizStyles";

const QuizScheduler = ({ control, watch, setValue, errors }) => {
  return (
    <SchedulerWrapper>
      <Label>جدولة الكويز</Label>
      <SchedulerContainer>
        <DatePickerWrapper>
          <TimeLabel>يبدأ في</TimeLabel>
          <Controller
            control={control}
            name="startDate"
            rules={{ required: "يجب تحديد وقت البدء" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="الوقت"
                timeFormat="h:mm aa"
                dateFormat="h:mm aa"
              />
            )}
          />
        </DatePickerWrapper>
        <Separator />
        <DatePickerWrapper>
          <TimeLabel>ينتهي في</TimeLabel>
          <Controller
            control={control}
            name="endDate"
            rules={{ required: "يجب تحديد وقت الانتهاء" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={5}
                timeCaption="الوقت"
                timeFormat="h:mm aa"
                dateFormat="h:mm aa"
                readOnly
              />
            )}
          />
        </DatePickerWrapper>
        <Separator />
        <DatePickerWrapper>
          <TimeLabel> التاريخ</TimeLabel>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => {
                  const startTime = new Date(watch("startDate"));
                  const endTime = new Date(watch("endDate"));
                  const newStartDate = new Date(date);
                  newStartDate.setHours(
                    startTime.getHours(),
                    startTime.getMinutes()
                  );
                  const newEndDate = new Date(date);
                  newEndDate.setHours(endTime.getHours(), endTime.getMinutes());
                  setValue("startDate", newStartDate, { shouldValidate: true });
                  setValue("endDate", newEndDate, { shouldValidate: true });
                }}
                dateFormat="yyyy/MM/dd"
              />
            )}
          />
        </DatePickerWrapper>
      </SchedulerContainer>
      {errors.startDate && <P>{errors.startDate.message}</P>}
      {errors.endDate && <P>{errors.endDate.message}</P>}
    </SchedulerWrapper>
  );
};

export default QuizScheduler;

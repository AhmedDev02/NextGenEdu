import styled from "styled-components";
import { useGetAnswers } from "./useGetAnswers"; // تأكد من تعريف هذا الهوك بشكل صحيح
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from "react-icons/fa"; // لأيقونات الصح/الخطأ/الدائرة

// الحاوية الرئيسية لصفحة الإجابات
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px; /* عرض مناسب للمحتوى لسهولة القراءة */
  margin: 30px auto; /* توسيط الحاوية مع مسافة علوية وسفلية */
  padding: 25px;
  background-color: #fefefe; /* خلفية بيضاء ناصعة قليلاً */
  border-radius: 12px; /* زوايا أكثر استدارة */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08); /* ظل أعمق وأكثر انتشارًا */
  direction: rtl; /* دعم اللغة العربية من اليمين لليسار */
  text-align: right; /* محاذاة النص لليمين */
  font-family: "Arial", sans-serif; /* استخدام خط عام وواضح */

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
    margin: 15px;
    border-radius: 0; /* إزالة الزوايا الدائرية على الشاشات الصغيرة لمظهر كامل */
    box-shadow: none; /* إزالة الظل على الشاشات الصغيرة */
  }
`;

// ترويسة عنوان الاختبار ووصفه
const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 35px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee; /* خط فاصل أرفع */

  h1 {
    font-size: 2.5em; /* حجم أكبر للعنوان */
    color: #333;
    margin-bottom: 10px;
    font-weight: 700; /* خط سميك */
  }

  p {
    font-size: 1.1em;
    color: #666;
    line-height: 1.6;
  }
`;

// قسم ملخص الدرجة
const ScoreSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f2f7; /* خلفية زرقاء فاتحة لجذب الانتباه */
  color: #007bff; /* لون أزرق أساسي */
  padding: 18px 30px;
  border-radius: 10px;
  font-size: 1.6em; /* حجم أكبر للدرجة */
  font-weight: bold;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); /* ظل خفيف */
  border: 1px solid #b3e0ff; /* حدود خفيفة */

  span {
    margin: 0 7px;
  }
`;

// مكون مُصمم لكل كتلة سؤال (بطاقة)
const QuestionBlock = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0; /* حدود ناعمة */
  border-radius: 10px; /* زوايا دائرية للبطاقة */
  padding: 25px;
  margin-bottom: 25px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07); /* ظل أوضح للبطاقة */
  transition: transform 0.2s ease-in-out; /* إضافة تأثير عند التفاعل */

  &:hover {
    transform: translateY(-3px); /* رفع البطاقة قليلاً عند المرور عليها */
  }
`;

// تصميم نص السؤال
const QuestionText = styled.h3`
  font-size: 1.5em; /* حجم أكبر لنص السؤال */
  color: #2c3e50; /* لون أغمق وأكثر وضوحًا */
  margin-bottom: 20px;
  line-height: 1.6;
  padding-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0; /* خط منقط فاصل */
`;

// حاوية الخيارات
const OptionsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// تصميم كل خيار إجابة
const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 14px 18px;
  margin-bottom: 12px;
  border-radius: 8px; /* زوايا دائرية للخيارات */
  font-size: 1.15em; /* حجم نص الخيار */
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  flex-direction: row-reverse; /* لعرض الأيقونات على اليمين والنص على اليسار في RTL */
  justify-content: flex-end; /* محاذاة المحتوى لليمين */
  border: 1px solid; /* حدود ديناميكية */

  // حالة: الطالب اختار الإجابة الصحيحة أو هذا هو الخيار الصحيح ولم يختره الطالب
  ${(props) =>
    props.$status === "correct" &&
    `
    background-color: #eaf7ed; /* أخضر فاتح جداً */
    border-color: #a6e6a6; /* حدود خضراء */
    color: #28a745; /* نص أخضر */
  `}

  // حالة: الطالب اختار إجابة خاطئة
  ${(props) =>
    props.$status === "incorrect" &&
    `
    background-color: #fce8ea; /* أحمر فاتح جداً */
    border-color: #e6a6a6; /* حدود حمراء */
    color: #dc3545; /* نص أحمر */
  `}

  // حالة: خيار محايد (لم يختره الطالب وليس الإجابة الصحيحة)
  ${(props) =>
    props.$status === "neutral" &&
    `
    background-color: #f7f9fb; /* رمادي-أزرق فاتح جداً */
    border-color: #e0e0e0;
    color: #555;
  `}
`;

// تصميم الأيقونة
const Icon = styled.span`
  margin-left: 12px; /* مسافة على يسار الأيقونة (لأن الاتجاه RTL) */
  font-size: 1.4em; /* حجم أكبر للأيقونات */
  display: flex;
  align-items: center;
  min-width: 20px; /* ضمان مسافة ثابتة للأيقونة */

  &.check {
    color: #28a745;
  }
  &.times {
    color: #dc3545;
  }
  &.default {
    color: #777; /* رمادي للأيقونات الافتراضية */
  }
`;

// نص إضافي لتوضيح إجابة الطالب أو الإجابة الصحيحة
const ClarificationText = styled.span`
  margin-right: 15px; /* مسافة على يمين النص التوضيحي */
  font-weight: normal;
  font-style: italic;
  font-size: 0.9em; /* أصغر قليلاً من نص الإجابة */
  opacity: 0.8; /* شفافية خفيفة */
`;

function ShowExamAnswersContent() {
  const { examId } = useParams();
  const { answers, isPending, error } = useGetAnswers(examId);

  // حالة التحميل
  if (isPending) {
    return <Container>جاري تحميل الإجابات...</Container>;
  }

  // حالة وجود خطأ
  if (error) {
    return <Container>خطأ في التحميل: {error.message}</Container>;
  }

  // حالة عدم وجود بيانات (مثل أن يكون الـ ID غير صحيح أو لا توجد إجابات)
  if (!answers || !answers.data) {
    return (
      <Container>عذرًا، لم يتم العثور على إجابات لهذا الاختبار.</Container>
    );
  }

  const examData = answers.data;

  return (
    <Container>
      <Header>
        <h1>{examData.title}</h1>
        <p>{examData.description}</p>
        <p>تاريخ الاختبار: {examData.date}</p>
      </Header>

      <ScoreSummary>
        <span>درجتك:</span>
        <span>{examData.student_degree}</span>
        <span>/</span>
        <span>{examData.max_degree}</span>
      </ScoreSummary>

      {/* عرض الأسئلة وإجاباتها */}
      {examData.questions.length > 0 ? (
        examData.questions.map((question, qIndex) => (
          <QuestionBlock key={question.id}>
            <QuestionText>
              السؤال {qIndex + 1}: {question.question}
            </QuestionText>
            <OptionsContainer>
              {question.answers.map((option) => {
                const isStudentAnswer = option.id === question.student_answer;
                const isCorrectOption = option.correct === 1;

                let optionStatus = "neutral";
                let iconComponent = (
                  <Icon className="default">
                    <FaRegCircle />
                  </Icon>
                );
                let clarificationText = "";

                // **المنطق الجديد لتحديد حالة الخيار بناءً على إجابة الطالب**
                if (
                  question.student_answer === null ||
                  question.student_answer === undefined
                ) {
                  // حالة: الطالب لم يجب على السؤال بالكامل
                  if (isCorrectOption) {
                    optionStatus = "correct";
                    iconComponent = (
                      <Icon className="check">
                        <FaCheckCircle />
                      </Icon>
                    );
                    clarificationText = "(الإجابة الصحيحة)"; // نوضح الإجابة الصحيحة فقط
                  } else {
                    optionStatus = "neutral"; // الخيارات الأخرى تظل محايدة
                    iconComponent = (
                      <Icon className="default">
                        <FaRegCircle />
                      </Icon>
                    );
                    clarificationText = ""; // لا يوجد نص توضيحي للخيارات التي لم يخترها الطالب
                  }
                } else {
                  // حالة: الطالب قد أجاب على السؤال
                  if (isStudentAnswer) {
                    if (isCorrectOption) {
                      optionStatus = "correct";
                      iconComponent = (
                        <Icon className="check">
                          <FaCheckCircle />
                        </Icon>
                      );
                      clarificationText = "(إجابتك الصحيحة)";
                    } else {
                      optionStatus = "incorrect";
                      iconComponent = (
                        <Icon className="times">
                          <FaTimesCircle />
                        </Icon>
                      );
                      clarificationText = "(إجابتك الخاطئة)";
                    }
                  } else if (isCorrectOption) {
                    // هذا الخيار هو الإجابة الصحيحة لكن الطالب لم يختره
                    optionStatus = "correct";
                    iconComponent = (
                      <Icon className="check">
                        <FaCheckCircle />
                      </Icon>
                    );
                    clarificationText = "(الإجابة الصحيحة)";
                  }
                }

                return (
                  <OptionItem key={option.id} $status={optionStatus}>
                    {iconComponent}
                    {option.answer}
                    {clarificationText && (
                      <ClarificationText>{clarificationText}</ClarificationText>
                    )}
                  </OptionItem>
                );
              })}
              {/* **رسالة عدم وجود إجابة من الطالب لهذا السؤال** */}
              {(question.student_answer === null ||
                question.student_answer === undefined) && (
                <ClarificationText
                  style={{
                    marginTop: "15px",
                    color: "#888",
                    fontStyle: "normal",
                    opacity: 1,
                  }}
                >
                  لم يتم إضافة إجابة لهذا السؤال.
                </ClarificationText>
              )}
            </OptionsContainer>
          </QuestionBlock>
        ))
      ) : (
        <p>لا توجد أسئلة لعرض إجاباتها في هذا الاختبار.</p>
      )}
    </Container>
  );
}

export default ShowExamAnswersContent;

export type QuestionTitleProps = {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
  onChange?: (newProps: QuestionTitleProps) => void
  disabled?: boolean
}
export const QuestionTitleDefaultProps: QuestionTitleProps = {
  text: '标题',
  level: 1 as 1 | 2 | 3 | 4 | 5,
  isCenter: false,
}

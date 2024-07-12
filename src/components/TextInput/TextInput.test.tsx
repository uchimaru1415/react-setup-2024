import userEvent from '@testing-library/user-event'
import TextInput from './TextInput'
import { render, screen } from '@testing-library/react'

test('TextInput test', async () => {
  const user = userEvent.setup()
  render(<TextInput />)

  const textElement = screen.getByText('Entered Text:')
  expect(textElement).toBeInTheDocument()

  const inputElement = screen.getByLabelText('Text Input')
  await user.type(inputElement, 'Hello')
  expect(screen.getByText('Entered Text: Hello')).toBeInTheDocument()
})

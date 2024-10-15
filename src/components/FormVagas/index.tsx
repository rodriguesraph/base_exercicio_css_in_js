import { FormEvent, useState } from 'react'

import { BtnPesquisar, Form, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form as="form" onSubmit={aoEnviarForm}>
      <Campo
        as="input"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar as="button" type="submit">
        Pesquisar
      </BtnPesquisar>
    </Form>
  )
}
export default FormVagas

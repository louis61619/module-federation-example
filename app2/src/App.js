import { Button, Modal, Form } from 'reactstrap'
import root from 'react-shadow'


import Welcome from './components/Welcome'

const App = ({ className, onClose }) => (
  <root.div className={className}>
    <h2 style={{ color: 'blue' }}>App 2jfiojfweojoi</h2>

    <Welcome />
    <Button onClick={onClose}>Hide</Button>
    <Modal />
    <Form />
  </root.div>
)

export default App

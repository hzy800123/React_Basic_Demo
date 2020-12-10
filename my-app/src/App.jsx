import React, { Component } from 'react'
import axios from 'axios'
import { Table, 
        Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter, 
        FormGroup, 
        Label, 
        Input,
        Container,
        Row,
        Col } from 'reactstrap'
import {ServerURL} from './Const'
import './AppStyle.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.editBook = this.editBook.bind(this)
    this.deleteBook = this.deleteBook.bind(this)
    this.getAllBooks = this.getAllBooks.bind(this)
    // this.onInputTitleChange = this.onInputTitleChange.bind(this)
    // this.onInputRatingChange = this.onInputRatingChange.bind(this)
    this.toogleNewBookModal = this.toogleNewBookModal.bind(this)
    this.toogleEditBookModal = this.toogleEditBookModal.bind(this)
    this.clickEditBook = this.clickEditBook.bind(this)
    this.toggleInvalidModal = this.toggleInvalidModal.bind(this)
  }

  state = {
    books: [],
    newBookData: {
      title: '',
      rating: ''
    },
    editBookData: {
      id: '',
      title: '',
      rating: ''
    },
    newBookModal: false,
    editBookModal: false,
    openInvalidModal: false
  }


  componentWillMount() {
    this.getAllBooks()
  }


  getAllBooks = () => {
    console.log('Start to contact to getallbook')

    // axios.get('http://47.107.105.61:8080/springboot-package/getallbook').then((response) => {
    // const fullURL = `https://${ServerURL}/book/GetAllBook`
    const fullURL = `${ServerURL}/book/GetAllBook`

    axios.get(fullURL).then((response) => {      
      console.log('Start to contact to getallbook')
      this.setState({
        books:response.data
      })
    }).catch((err) =>{
      console.log('Failed to contact to getallbook again.')
      console.log('err status: ', err.response.status)
      console.log('err code: ', err.response.code)
      console.log('Failed to contact to getallbook again. The err is ', err)
    })    
  }


  toogleNewBookModal = () => {
    this.setState({
      newBookModal: !this.state.newBookModal
    })
  }


  toogleEditBookModal = () => {
    this.setState({
      editBookModal: !this.state.editBookModal
    })
  }


  clickEditBook = (book) => {
    this.setState({
      editBookData: {
        id: book.id,
        title: book.title,
        rating: book.rating
      },
      editBookModal: !this.state.editBookModal
    })
  }


  onInputNewTitleChange = ((e) => {
    let {newBookData} = this.state
    let rating = newBookData.rating
    let title = e.target.value

    this.setState({
      newBookData: {
        title,
        rating
      }
    })
  })


  onInputNewRatingChange = ((e) => {
    let {newBookData} = this.state
    let title = newBookData.title
    let rating = e.target.value

    this.setState({
      newBookData: {
        title,
        rating
      }
    })
  })  


  onInputEditTitleChange = ((e) => {
    let {editBookData} = this.state
    let id = editBookData.id    
    let rating = editBookData.rating
    let title = e.target.value

    this.setState({
      editBookData: {
        id,
        title,
        rating
      }
    })
  })


  onInputEditRatingChange = ((e) => {
    let {editBookData} = this.state
    let id = editBookData.id
    let title = editBookData.title
    let rating = e.target.value

    this.setState({
      editBookData: {
        id,
        title,
        rating
      }
    })
  })  

  
  addNewBook = () => {
    // axios.post('http://47.107.105.61:9090/book/AddNewBook', this.state.newBookData).then((response) => {
    // const fullURL = `https://${ServerURL}/book/AddNewBook`
    const fullURL = `${ServerURL}/book/AddNewBook`

    axios.post(fullURL, this.state.newBookData).then((response) => {
      console.log(response.data)
      this.setState({
        books: response.data,
        newBookData: {
          title: '',
          rating: ''
        },
        newBookModal: false
      })
    }).catch((err) =>{
      console.log('Failed to contact to getallbook. The err is ', err)
      this.setState({
        openInvalidModal: true
      })      
    })
  }


  editBook = () => {
    // axios.post('http://47.107.105.61:9090/book/EditBook', this.state.editBookData).then((response) => {
    // const fullURL = `https://${ServerURL}/book/EditBook`
    const fullURL = `${ServerURL}/book/EditBook`

    axios.post(fullURL, this.state.editBookData).then((response) => {
      console.log(response.data)
      this.setState({
        books: response.data,
        editBookData: {
          id: '',
          title: '',
          rating: ''
        },
        editBookModal: false
      })
    }).catch((err) =>{
      console.log('Failed to contact to getallbook. The err is ', err)
      this.setState({
        openInvalidModal: true
      })      
    })
  }


  deleteBook = (book) => {    
    // axios.post('http://47.107.105.61:9090/book/DeleteBook', {id}).then((response) => {
    // const fullURL = `https://${ServerURL}/book/DeleteBook`
    const fullURL = `${ServerURL}/book/DeleteBook`

    axios.post(fullURL, book).then((response) => {
      console.log(response.data)
      this.setState({
        books: response.data,
      })
    }).catch((err) =>{
      console.log('Failed to contact to getallbook. The err is ', err)
    })
  }


  toggleInvalidModal = () => {
    this.setState({
      openInvalidModal: false
    })
  }


  render() {    

    let booksList = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td className='styled-ratingTd'>{book.rating}</td>
          <td className = 'styled-td'>
            <Button 
              color='success' 
              size='sm'
              className = 'mr-1'
              onClick={() => this.clickEditBook(book)}>
                Edit
            </Button>
            <Button 
              color='danger' 
              size='sm' 
              onClick={() => this.deleteBook(book)}>
                Del
            </Button>
          </td>
        </tr>
      )
    })


    return (
    
      <div className="App container">

        <Container className="themed-container" fluid="md">
          <Row className="my-2">
            <Col sm="12" md={{ size: 6, offset: 3 }}><h1>Book App</h1></Col>
            <Col sm="12" md={{ size: 6, offset: 3 }}>version 2.0</Col>
          </Row>          
        </Container>

        <Container className="themed-container" fluid="md">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 8 }}>
              <Button color="primary" onClick={() => this.toogleNewBookModal()}>Add Book</Button>
            </Col>
          </Row>          
        </Container>  
        
        <Modal name="New Book" isOpen={this.state.newBookModal} toggle={() => this.toogleNewBookModal()}>
          <ModalHeader toggle={() => this.toogleNewBookModal()}>New Book Detail</ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input 
                id="title" 
                placeholder="Input Book Title"
                value={this.state.newBookData.title}
                onChange={this.onInputNewTitleChange.bind(this)} />
            </FormGroup>

            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input 
                id="rating" 
                placeholder="Input Book Rating"
                value={this.state.newBookData.rating}
                onChange={this.onInputNewRatingChange.bind(this)} />
            </FormGroup>              
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.addNewBook()}>Add Book</Button>
            <Button color="secondary" onClick={() => this.toogleNewBookModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>        

        <Modal name="Edit Book" isOpen={this.state.editBookModal} toggle={() => this.toogleEditBookModal()}>
          <ModalHeader toggle={() => this.toogleEditBookModal()}>Edit Book Detail</ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input 
                id="title" 
                placeholder="Input Book Title"
                value={this.state.editBookData.title}
                onChange={this.onInputEditTitleChange.bind(this)} 
              />
            </FormGroup>

            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input 
                id="rating" 
                placeholder="Input Book Rating"
                value={this.state.editBookData.rating}
                onChange={this.onInputEditRatingChange.bind(this)} 
              />
            </FormGroup>              
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editBook()}>Edit Book</Button>
            <Button color="secondary" onClick={() => this.toogleEditBookModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.openInvalidModal}>
          <ModalBody>
            Input Invalid Data.
          </ModalBody>
          <ModalFooter>
              <Button color="danger" onClick={() => this.toggleInvalidModal()}>Close</Button>
          </ModalFooter>
        </Modal>        

        <Table striped className="my-3">
          <thead>
            <tr>
              <th width={'5%'}>#</th>
              <th width={'40%'}>Title</th>
              <th width={'10%'}>Rating</th>
              <th width={'45%'} className='styled-th'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {booksList}
          </tbody>
        </Table>              
      </div>

    )
  }
}


export default App

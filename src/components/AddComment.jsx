import { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment(c => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async e => {
    e.preventDefault()
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZGQyMjdmMzA0NjAwMWFlNTlmNTMiLCJpYXQiOjE3MTQ2NTU1MzUsImV4cCI6MTcxNTg2NTEzNX0.-qif6tIZBKKWrdxC3zWleTNHgM_zaKe-6TCEww4TL0M",
        },
      })
      if (response.ok) {
        alert("Recensione inviata!")
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error("Qualcosa è andato storto")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={e =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={e =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="warning" type="submit">
          Invia Recensione
        </Button>
      </Form>
    </div>
  )
}

export default AddComment

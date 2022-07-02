import React from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import "../Styles/Form.css";

const Form = () => {
  const validate = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const clear = () => {};
  return (
    <Paper style={{ padding: "2px", borderRadius: "2rem" }}>
      <form
        style={{
          padding: "5px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {/* <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography> */}
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          style={{ margin: "20px" }}
          //   value={postData.creator}
          //   onChange={(e) =>
          //     setPostData({ ...postData, creator: e.target.value })
          //   }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          style={{ margin: "20px" }}
          //   value={postData.title}
          //   onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          style={{ margin: "20px" }}
          //   value={postData.message}
          //   onChange={(e) =>
          //     setPostData({ ...postData, message: e.target.value })
          //   }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          style={{ margin: "20px" }}
          //   value={postData.tags}
          //   onChange={(e) =>
          //     setPostData({ ...postData, tags: e.target.value.split(",") })
          //   }
        />

        <Button variant="contained" color="primary" size="large" type="submit">
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

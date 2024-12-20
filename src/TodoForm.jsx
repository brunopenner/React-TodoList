import { Create } from "@mui/icons-material";
import { IconButton, InputAdornment, ListItem, TextField } from "@mui/material";
import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        sertText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit} >
                <TextField
                    id="outlined-basic"
                    label="Add Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="create todo" edge="end" type="submit">
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </form>
        </ListItem>
    );
}

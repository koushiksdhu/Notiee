import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props){
    
    const [isExpanded, setExpanded] = useState(false);

    function handleExpansion(){
        setExpanded(true);
    }

    const [eachNote, insertNote] = useState({
        title: "",
        content: ""
    });

    function handleNote(event){
        const {name, value} = event.target;
        insertNote({...eachNote, 
            [name]: value
        });
    }

    function handleSaveNote(event){
        props.onAdd(eachNote);
        insertNote({title: "", content: ""})
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleNote} name="title" value={eachNote.title} placeholder="Title" />}
                <textarea onClick={handleExpansion} onChange={handleNote} name="content" value={eachNote.content} placeholder="Take a note...." rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleSaveNote} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}
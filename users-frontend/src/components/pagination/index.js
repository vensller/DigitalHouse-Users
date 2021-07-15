import './styles.css';
import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { ArrowButton } from './styles.js';

export default function Pagination(props) { 
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className="pagination">
            <button type="button" onClick={() => setDarkMode(!darkMode)}>dark</button>
            <ArrowButton 
                type="button" 
                disabled={props.page === 1} 
                onClick={() => props.onPageChange(props.page - 1)}
                dark={darkMode}
            >
                <MdNavigateBefore size={24}/>
            </ArrowButton>
            <span>Página {props.page}</span>
            <button 
                className="pagination-arrows"
                type="button" 
                onClick={() => props.onPageChange(props.page + 1)}
            >
                <MdNavigateNext size={24}/>
            </button>
        </div>
    )
}
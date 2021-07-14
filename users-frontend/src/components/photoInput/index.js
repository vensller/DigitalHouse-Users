import './styles.css';
import { MdImage } from 'react-icons/md';

export default function PhotoInput() {
    return (
        <div className="photoinput">
            <label htmlFor="image">
                <MdImage size={150} color="#999" />
                <input 
                    type="file"
                    id="image"
                    accept="image/*"
                /> 
            </label>                        
        </div>
    )
}
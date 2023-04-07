import { createImageFromInitials } from "../../utils/createImageFromInitials";
import { getRandomColor } from "../../utils/getRandomColor";

export default function Profile({ name }) {
    return (
        <div>
            <img
                id='preview'
                src={createImageFromInitials(500, name, getRandomColor())}
                alt='profile-pic'
            />
        </div>
    );
}
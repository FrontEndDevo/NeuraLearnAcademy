import {
  faCircleInfo,
  faEye,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateNewCourse = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Course Info</h2>
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>

        <button>Cancel</button>
      </div>

      <div>
        <div>
          <img src="" alt="" />

          <div>
            <div>
              <FontAwesomeIcon icon={faUpload} />
              <span>Upload Picture</span>
            </div>

            <div>
              <FontAwesomeIcon icon={faTrashCan} />
              <span>Delete</span>
            </div>
          </div>

          <button>Save</button>
        </div>

        <div>
          <div>
            <ul>Categories</ul>
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" />
            <p>Note: Dealing only in US dollars</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEye} />
            <span>Visibility</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCourse;

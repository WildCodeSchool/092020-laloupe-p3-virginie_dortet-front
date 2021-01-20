import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MyBooks.scss";

const API_URL = process.env.REACT_APP_API_URL;

const images = [];

function UploadFileBooks({ setIsOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [ulule, setUlule] = useState("");

  // Method to put the images and their corresponding alt in an array
  const onChangeImage = (event) => {
    const file = event.target.files[0];
    const id = event.target.name.replace(/^\D+/g, "");
    const row = images.find((image) => image.id === id);
    if (row) {
      row.file = file;
      row.img = file.name;
    } else {
      images.push({ id, img: file.name, file });
    }
    console.log(images);
  };

  const onChangeAlt = (event) => {
    const alt = event.target.value;
    const id = event.target.name.replace(/^\D+/g, "");
    const row = images.find((image) => image.id === id);
    if (row) {
      row.alt = alt;
    } else {
      images.push({ id, alt });
    }
    console.log(images);
  };

  // Method to validate images formats
  const validateImages = () => {
    let msg =
      "Seuls les formats .jpg, .png et .jpeg sont autorisés. Veuillez vérifier les images: ";
    let i = 0;
    images.map((image) => {
      if (
        image.file.type !== "image/jpeg" &&
        image.file.type !== "image/jpg" &&
        image.file.type !== "image/png"
      ) {
        console.log(image);
        i += 1;
        msg += `${image.id},`;
      }
      return image;
    });
    if (i > 0) {
      alert(msg.substring(0, msg.length - 1));
    }
    return i === 0;
  };

  // Method to upload images in a folder called Public/Images on the back side
  const upLoadImages = () => {
    if (validateImages()) {
      images.map(async (image) => {
        const data = new FormData();
        data.append("file", image.file);
        console.table("form", data.get("file"));
        await axios
          .post(`${API_URL}/api/upload/livres`, data)
          .then((res) => {
            alert(`images ${image.id} uploaded`);
            return res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  };

  // When submitting the form, it will implement the information of the book in the corresponding tables Book, Images and Funding on the back side
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description || !price || !date) {
      alert(
        "Vous devez renseigner au minimum un titre, une description, un prix et une date de publication"
      );
    } else {
      axios
        .post(`${API_URL}/api/livres`, {
          Title: title,
          Description: description,
          Price: price,
          Link: ulule,
          Publication: date,
          Images: images,
        })
        .then((res) => res.data)
        .then((data) => {
          upLoadImages(data.BookId);
          setIsOpen(false);
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    }
  };

  return (
    <div className="books-form">
      <form onSubmit={handleSubmit}>
        {/* Informations about the book */}
        <h2>Informations du livre</h2>
        <div className="information-box">
          <label htmlFor="title">
            Titre du livre
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="date">
            Date de publication
            <input
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label htmlFor="price">
            Prix (en euros)
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label htmlFor="description">
            Description du livre
            <textarea
              type="number"
              name="price"
              onChange={(e) => setDescription(e.target.value)}
              maxLength="800"
            />
          </label>
        </div>

        {/* Images of the book */}
        <h2>Illustrations du livre</h2>
        <ul className="image-box">
          <li>
            <label htmlFor="image1">
              Image principale
              <input
                type="file"
                name="file1"
                accept="image/*"
                onChange={onChangeImage}
              />
            </label>
            <label htmlFor="alt1">
              Description Image principale
              <input
                className="alt-input"
                type="text"
                name="alt1"
                onChange={onChangeAlt}
              />
            </label>
          </li>
          <li>
            <label htmlFor="image2">
              Image 2
              <input
                type="file"
                name="file2"
                accept="image/*"
                onChange={onChangeImage}
              />
            </label>
            <label htmlFor="alt2">
              Description Image 2
              <input
                className="alt-input"
                type="text"
                name="alt2"
                onChange={onChangeAlt}
              />
            </label>
          </li>
          <li>
            <label htmlFor="image3">
              Image 3
              <input
                type="file"
                name="file3"
                accept="image/*"
                onChange={onChangeImage}
              />
            </label>
            <label htmlFor="alt3">
              Description Image 3
              <input
                className="alt-input"
                type="text"
                name="alt3"
                onChange={onChangeAlt}
              />
            </label>
          </li>
          <li>
            <label htmlFor="image4">
              Image 4
              <input
                type="file"
                name="file4"
                accept="image/*"
                onChange={onChangeImage}
              />
            </label>
            <label htmlFor="alt4">
              Description Image 4
              <input
                className="alt-input"
                type="text"
                name="alt4"
                onChange={onChangeAlt}
              />
            </label>
          </li>
          <li>
            <label htmlFor="image5">
              Image 5
              <input
                type="file"
                name="file5"
                accept="image/*"
                onChange={onChangeImage}
              />
            </label>
            <label htmlFor="alt5">
              Description Image 5
              <input
                className="alt-input"
                type="text"
                name="alt5"
                onChange={onChangeAlt}
              />
            </label>
          </li>
        </ul>

        {/* Information about the funding */}
        <h2>Financement avec la plateforme Ulule</h2>

        <div className="financement-box">
          <label htmlFor="url">
            Si le livre est financé par Ulule, merci de préciser le lien de la
            page
            <input
              type="url"
              name="url"
              onChange={(e) => setUlule(e.target.value)}
            />
          </label>
        </div>

        {/* Submit button  */}
        <div className="submit-book">
          <button type="submit" value="submit">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}

UploadFileBooks.propTypes = {
  setIsOpen: PropTypes.func,
};

UploadFileBooks.defaultProps = {
  setIsOpen: false,
};

export default UploadFileBooks;

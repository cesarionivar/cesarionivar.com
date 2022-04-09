import { Meta } from '../components/Meta';

const contact = () => {
  return (
    <>
      <Meta title='Contact | Cesario Nivar' />

      <div className='contact page'>
        <h2 className='page__title'>Contact</h2>
        <div className='contactForm__container'>
          <form
            action='/success'
            name='contact-form'
            method='POST'
            data-netlify='true'
          >
            <input type='hidden' name='form-name' value='contact-form' />
            <div className='formControl sender-data'>
              <input name='name' type='text' placeholder='Full name' required />
              <input name='email' type='text' placeholder='Email' required />
            </div>
            <div className='formControl'>
              <textarea
                name='message'
                placeholder='Message'
                required
              ></textarea>
              <button type='submit'>Send message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default contact;

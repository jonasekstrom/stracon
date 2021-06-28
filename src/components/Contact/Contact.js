import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    human: false
  });

  const { name, email, message } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_3sfpcdg";

    sendFeedback(templateId, {
      message: message,
      name: name,
      email: email,
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_3lfm6ha", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };
  return (
    <div>
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1614326014420-1f0c741ca7e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
          alt="Eriksberg"
        />
        <div class="centered text-white">Kontakta Oss</div>
      </div>
      <div className="container">
        
        <div
          className="row justify-content-start mt-5"
          data-aos="flip-up"
          data-aos-once="true"
        >
           <div className="col text-center my-auto">
            
            <a
              href="mailto:info@stracon.com"
              className=" text-decoration-none text-reset"
            >
              <i className="far fa-envelope fa-4x d-block"> </i>
              info@stracon.se
            </a>
           
          </div>
          <div className="col text-center">
            <a
              href="tel:+46(0)70562354"
              className=" text-decoration-none text-reset"
            >
              <i className="fas fa-phone-square fa-4x d-block"></i>+46(0)70562354
            </a>
          </div>
        </div>
        <div
          className="row justify-content-center margin50"
          data-aos="flip-up"
          data-aos-once="true"
        >
          <div className="col text-center">
            {" "}
            <i className="fab fa-linkedin-in fa-4x me-4"></i>
          </div>
          <div className="col text-center">
            <i className="fab fa-facebook-square fa-4x me-4"></i>
          </div>
          <div className="col text-center">
            {" "}
            <i className="fab fa-instagram-square fa-4x me-4"></i>
          </div>
        </div> 
        <div className="container">
 
        <span class="anchor" id="formular"></span>

        <div className="mx-auto col col-md-8 margin50">
        <h5 className="mb-5">Vill du få en offert eller veta mer om våra tjänster? Använd kontaktformuläret nedan, så svarar vi dig så snart vi kan. 

</h5>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <label htmlFor="name">Namn:</label>
              <input
                type="text"
                className="form-control border-left-0"
                name="name"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Epost:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder=""
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="meddelande">Meddelande:</label>
              <textarea
                className="form-control"
                name="message"
                rows="6"
              ></textarea>
            </div>
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="policy" />
              <label className="form-check-label" htmlFor="policy">
                <p>
                  Jag har läst och accepterar Stracons
                  <a
                    href="/#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className="text-reset ms-1"
                  >
                    integritetspolicy
                  </a>
                </p>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header text-center">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Privacy policy
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Privacy policy Stracon AB is committed to protecting and
                        respecting your privacy. This privacy policy describes
                        how we collect and use your personal data when you apply
                        for a job or get in touch with us regarding a job
                        application. It also describes the choices available to
                        you regarding our use of your personal data. Please read
                        this privacy policy before submitting your application.
                        By submitting your application, you accept this privacy
                        policy and our processing of your personal data. Stracon
                        AB is the responsible entity (controller) for the
                        processing of your personal data as described herein.
                        Please do not hesitate to reach out to info@Stracon.se
                        if you have any questions or comments regarding your
                        privacy.
                        <br/> 
                        <br/>
                        1. Personal information that we handle During
                        the recruitment process, we will collect and process
                        personal data about you. Depending on the circumstances,
                        such personal data may include the categories of data
                        listed below. Please note that the examples listed under
                        each category are not exhaustive. Contact details, such
                        as your email address, telephone number and postal
                        address. Individual data, such as your name, gender,
                        date of birth, personal identification number or other
                        identifier, marital status, preferred language,
                        nationality, passport information, food preferences,
                        hobbies. Interview and reference data, such as notes
                        taken during interviews and from references, assessments
                        of capabilities, current and historic salary details
                        together with salary and benefits expectations, and any
                        other information you or your references provide us
                        with. Professional skills and application data, such as
                        skills and competencies, language capabilities, resume,
                        cover letter, previous and relevant work experiences,
                        other experiences, academic background, grades,
                        transcripts, professional certifications, job
                        preferences and type of employment sought, references,
                        letter of recommendations and any other information you
                        include in your application. Correspondence data, such
                        as personal information provided by email, regular mail
                        or other means, letters of offer and acceptance of
                        employment. Other data. We may also collect and process
                        any other relevant information you share with us about
                        yourself in the course of your application. Please note
                        that we receive any information you send to us.
                        Sensitive data. We will only collect sensitive personal
                        data (such as racial or ethnic origin, political
                        opinions, religion, health, or the like) if there is a
                        clear reason for doing so. For example, if you have
                        physical limitations or special needs that require us to
                        make specific considerations during the recruitment
                        process. We do this to enable our candidates to apply
                        for jobs with us and to ensure that we comply with
                        regulatory obligations placed upon us with regard to our
                        hiring. Because email communications are not always
                        secure, we encourage you to not include sensitive data
                        in your emails to us.
                        <br/> 
                        <br/>
                        2. How we gather your personal
                        information Information you give to us. Most of the
                        information Stracon AB collects about you is received
                        directly from you, for example from your application and
                        during interviews. You can always choose not to provide
                        us certain information. However, not providing requested
                        personal data may affect or prevent us from evaluating
                        your application or consider you as a candidate.
                        Information we collect about you. Stracon AB may also
                        collect personal data about you from third parties, such
                        as professional recruiting firms, your references and
                        prior employers. Sometimes we may also obtain personal
                        data from publicly available sources, such as your
                        profile on LinkedIn, Facebook and other publicly
                        available information.
                        <br/> 
                        <br/>
                        3. How your information will be
                        used Stracon AB will process your personal data in a
                        conventional and regular recruitment manner. For
                        example, we may need to process your data to enter into
                        a contract with you regarding the employment. This also
                        includes taking steps prior to entering into a contract
                        with you. Stracon AB also have a legitimate interest in
                        processing your personal data during the recruitment
                        process and for keeping records of the process.
                        Processing data from job applicants allows us to manage
                        the recruitment process, assess and confirm a
                        candidate’s suitability for employment and choose
                        between candidates. Stracon AB will process your
                        personal data for the following purposes: To manage all
                        aspects of the recruitment process. Your personal data
                        will be used to manage your job application, to assess
                        qualifications and evaluate performance in interviews
                        and tests, determine eligibility for initial employment,
                        including the verification of references, qualifications
                        and performance. To communicate with you. Your personal
                        data (e.g. your email and phone number) will be used to
                        communicate with you before, during and after the
                        recruitment process. For example, in order to schedule
                        interviews and tests, provide you with feedback and
                        inform you of other open positions at Stracon AB. To
                        consider you for other positions. We may use your
                        personal data to consider you for other positions than
                        the one you are applying for, or for potential future
                        roles. If you are not interested in any other positions,
                        please reach out to us and let us know you wish to be
                        excluded. To comply with legal obligations and legal
                        process. We may need to process your personal data to
                        ensure that we are complying with our legal obligations.
                        For example, we need to check a successful applicant’s
                        eligibility to work in Sweden before employment starts.
                        We may also need to process data your personal to
                        respond to and defend us against legal claims. To manage
                        your employment with us. In the event of your
                        application resulting in the offer and your acceptance
                        of a position at Stracon AB, the data collected will
                        become part of your employment record and will be used
                        for employment purposes, in accordance with our employee
                        privacy policy.
                        <br/> 
                        <br/>
                        4. How we share your information Stracon
                        AB may share your personal information with our
                        employees and other trusted parties, to the extent
                        required to manage the recruitment process: Our
                        employees. Your information will be shared internally
                        for the purposes of the recruitment process, and to
                        manage our daily business operations. However, we will
                        restrict access to those of our employees who need it to
                        perform their jobs, such as individuals performing
                        administrative functions, HR and any other members of
                        staff involved in the recruitment process. Service
                        providers. We may transfer or share your personal data
                        with suppliers and subcontractors that supply services
                        to us which require the processing of your personal
                        data. For example, third party service providers may
                        provide us with recruiting software systems or assist us
                        in the recruiting process, including interviewing,
                        administering tests and evaluating candidates. We may
                        also engage legal and other professional advisers.
                        Please note that our suppliers and subcontractors are
                        not authorized to use or disclose your personal data
                        except as necessary to perform services on our behalf,
                        or to comply with legal requirements. Legal purposes.
                        Sometimes legal purposes may require us to share
                        information about you, for example if required by law,
                        legal process or to respond to lawful requests from law
                        enforcement agencies, regulatory agencies, and other
                        public and government authorities. Other parties. We may
                        also share your personal information where you ask or
                        permit us to. For example, we may share necessary
                        information about you with the references you have
                        provided, to make any necessary reference checks.
                        <br/> 
                        <br/>
                        5.
                        Where we process your personal data Stracon AB always
                        strives to process and store your data within the
                        EU/EEA. However, your data may in certain situations be
                        transferred to, and stored at, a destination outside of
                        the EU/EEA territory. Please note that privacy laws in
                        countries outside of the EU/EEA may not be the same as,
                        and in some cases may be less protective than, privacy
                        laws in your country. Stracon AB will however take all
                        steps necessary to ensure that adequate safeguards (for
                        example, EU standard Model Clauses and Privacy Shield)
                        are in place to protect your personal information and to
                        make sure it is treated securely.
                        <br/> 
                        <br/>
                        6. How long we keep
                        your personal data Stracon AB keeps your personal data
                        only as long as necessary for the recruitment process.
                        However, we may keep your personal data up to two years
                        after the position has been filled. The reason for this
                        it that we may need to show that the hiring process was
                        non-discriminatory. We may also keep and use your
                        personal data for a limited period of time to consider
                        you for potential future roles. If you are not
                        interested in any other positions than the one you are
                        applying for, please reach out to us and let us know you
                        wish to be excluded. Your application will be saved for
                        this purpose as long as you are considered an
                        interesting candidate, but no longer than two years.
                        However, we may contact you to ask if you want to review
                        and update your application to continue to be included
                        in our pool of potential candidates. If your application
                        has been successful and you are hired, the data
                        collected will become part of your employment record and
                        will be used for employment purposes, in accordance with
                        our employee privacy policy.
                        <br/> 
                        <br/>
                        7. Your rights Right to
                        object. You have right to object to processing based on
                        legitimate interest. This means we may no longer process
                        the personal data unless we can demonstrate compelling
                        legitimate grounds for the processing which override
                        your interests. You can always contact us for more
                        information on the balance test that has been made.
                        Right to access and transfer your data. You have the
                        right to request a transcript of personal data processed
                        by us, and additional information on how the data have
                        been collected, processed, shared, etc. The first
                        transcript may be requested free of charge. You may also
                        be entitled to transfer your personal data to another
                        controller. Right to rectification. You have the right
                        to correct inaccurate or incomplete information about
                        yourself. Right to erasure. You have the right to
                        request that we delete personal data about you, for
                        example if the data is no longer necessary in relation
                        to the purposes for which it was collected or otherwise
                        processed, or if there is no legal basis for processing
                        the data. Right to restriction. You are entitled to
                        request that the processing of your personal data should
                        be limited until inaccurate or incomplete information
                        about you has been corrected, or until an objection from
                        you has been handled. Right to withdraw your consent.
                        You may at any time withdraw any consent you have given
                        us. However, please note that it will not affect any
                        processing that has already taken place. Please note
                        that legal rights or obligations (such as privacy and
                        confidentiality legislation) may prevent us from
                        disclosing or transfer all or part of your information,
                        or from immediately deleting your information.
                        <br/> 
                        <br/>
                        8. How to
                        contact us Stracon AB is the responsible entity
                        (controller) for the processing of your personal data as
                        described above. We are subject to Swedish data
                        protection legislation, including the General Data
                        Protection Regulation (GDPR). If you have any questions
                        or comments on this privacy policy or about our use of
                        your personal data, please contact us at
                        info@Stracon.se.
                        <br/> 
                        <br/>
                        9. Complaints You have the right to
                        lodge a complaint to the Swedish Supervisory Authority,
                        if you believe that we have not complied with our
                        obligations regarding your personal data.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Skicka
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

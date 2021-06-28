import React from 'react'

function Topbar() {
    return (

<section id="top-bar" class="p-3 pb-0 text-center">
  <div class="container">
    <div class="row">
      <div class="col-md-3"><i class="fas fa-phone"></i> (617)-555-5555</div>
      <div class="col-md-5">
        <i class="fas fa-envelope-open"></i> info@stracon.se
      </div>
      <div class="col-md-4">
        <div class="social text-right">
          <a href="#">
            <i class="fab fa-facebook fa-2x me-2"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin fa-2x me-2"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Topbar

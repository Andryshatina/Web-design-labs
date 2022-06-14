<template>
  <div class="container mt-5" id="login">
    <div class="row">
      <!-- Log in -->
      <div class="col-xl-5 col-sm-12 text-center mb-5 pt-4 pb-4"
        style="background-color: #F5F2E7; border-radius: 4%; margin-right: 1rem;">
        <h2>Log in</h2>
        <form style="max-width: 240px; margin: auto;">
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-primary mt-5" style="background-color: #2C3333;">
              <a class="nav-link active text-white" href="/">Go Back</a>
            </button>
          </div>
        </form>
      </div>
      <!-- Sign in -->
      <div class="col-xl-5 col-sm-12 text-center mb-5 pt-4 pb-4" style="background-color: #F5F2E7; border-radius: 4%;">
        <h2>Sign In</h2>
        <form style=" max-width: 240px; margin: auto;">
          <!-- Name -->
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="name">
          </div>
          <!-- Male/Female check -->
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioMale" id="flexRadioMale">
            <label class="form-check-label" for="flexRadioMale">
              Male
            </label>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="radio" name="flexRadioFemale" id="flexRadioFemale" checked>
            <label class="form-check-label" for="flexRadioFemale">
              Female
            </label>
          </div>
          <!-- Birthday input -->
          <div class="form-check mb-3" style="font-weight: bolder;">
            <label for="birthday">Birthday:</label>
            <input type="date" id="birthday" name="birthday">
          </div>
          <!-- Email -->
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <!-- Password -->
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>
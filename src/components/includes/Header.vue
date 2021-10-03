<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black;">
        <div class="container-fluid">
            <router-link class="navbar-brand" tag="a" to="/">MOVUE</router-link>
            <small style="color: grey">Movie, series search engine</small>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarMobile" aria-controls="navbarMobile" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMobile">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" tag="a" class="nav-link" active-class="active" exact>
                            Search
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/my-favorites" tag="a" class="nav-link" active-class="active" exact>
                            My Favorites
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

};
</script>

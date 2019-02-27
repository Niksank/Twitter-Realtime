<% for(var i = 0, len = locals.length; i < len; i += 1) { %>
<div class="row">
  <div class="col-sm">
    <div class="card test">
      <div class="card-body">
        <img src="<%- locals[i].user.profile_image_url %>" alt="..." class="img-thumbnail">
        <h5 class="card-title"><%- locals[i].user.name %></h5>
        <h6 class="card-subtitle mb-2 text-muted"><%- locals[i].created_at %></h6>
        <p class="card-text"> <%- locals[i].text %></p>
        <a href="#" class="card-link"> <%- locals[i].retweet_count %> Retweets</a>
        <a href="#" class="card-link"> <%- locals[i].favorite_count %> Likes</a>

      </div>
    </div> 
  </div>  
</div>
<br>
 <% } %>
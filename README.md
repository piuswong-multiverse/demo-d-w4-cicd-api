# Demo code for RESTful APIs

Set up the API to be able access endpoints and execute CRUD actions for dogs, shows, etc.

## Notes on setting up GitHub Actions after Dockerfile, and deploying on Railway

1. Have your working repo set up on GitHub. 
2. Get the Dockerfile set up.  Test to make sure it works.
3. Set up deployment via GitHub Actions, by creating the `.github/workflows` folder, and inside that a `.yml` file for your workflow(s). Commit to GitHub repo. (if push errors, debug first)
4. Set up Railway & GitHub actions. ([Some notes here from Multiverse on this](https://docs.google.com/document/d/1pHJlyNtmnFA_h6rJ0fWHsX1sFMVt30d3oX_ns5ZPgNE/edit#heading=h.ze4iispbaz4l), as well as on CodingRooms.  There's also a way to deploy via Railway without using the RAILWAY_TOKEN, in beta, as described in Railway docs.)
5. Test out the deployment.  Modify workflows or code as needed.

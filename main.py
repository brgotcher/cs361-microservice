import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from random import randint

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# test random number generator to be used to pick random picture
# for i in range(25):
#     val = randint(0,100)
#     print(val)

dct = {
    "Elephant": "https://images.theconversation.com/files/230552/original/file-20180803-41366-8x4waf.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    "Giraffe": "https://assets.nrdc.org/sites/default/files/styles/full_content/public/media-uploads/4156898465_25c1473163_o_0.jpg?itok=o_A2j-dT",
    "Skyline": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Downtown_Oklahoma_City_skyline_%282%29.jpg",
    "Hippopotamus": "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2hpcHBvLXN1bnNjcmVlbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==",
    "Library": "https://s3.amazonaws.com/libapps/accounts/54937/images/NYPublicLib.jpg",
    "Gymnasium": "https://d6vze32yv269z.cloudfront.net/32e1435e-50ad-45a8-a151-0aacfe7f5ac6/pages/images/img_8285-bj0znt.jpg",
    "Helicopter": "https://cdn.vox-cdn.com/thumbor/zTEe0PixI4EmHamgaX14-EVAfCM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15394156/D85_1824.jpg",
    "Intersection": "https://images.unsplash.com/photo-1567563549378-81212b9631e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJzZWN0aW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    


}
dctKeys = list(dct)

# print(dctKeys[val])
# print(dct[dctKeys[val]])

# https://realpython.com/fastapi-python-web-apis/
@app.get("/")
async def root():
    # randomly choose which picture to use by index- both randint parameters
    # are included in possible outcomes
    val = randint(0, len(dct)-1)
    # return json formatted pair of name and pic URL
    return {dctKeys[val]: dct[dctKeys[val]]}

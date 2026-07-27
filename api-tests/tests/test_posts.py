import requests

BASE_URL = "https://jsonplaceholder.typicode.com"


def test_get_all_posts():
    response = requests.get(f"{BASE_URL}/posts")

    assert response.status_code == 200

    data = response.json()

    assert len(data) > 0


def test_get_single_post():
    response = requests.get(f"{BASE_URL}/posts/1")

    assert response.status_code == 200

    data = response.json()

    assert data["id"] == 1

    assert "title" in data


def test_create_post():
    payload = {
        "title": "Playwright Challenge",
        "body": "Python API Test",
        "userId": 1,
    }

    response = requests.post(
        f"{BASE_URL}/posts",
        json=payload,
    )

    assert response.status_code == 201

    data = response.json()

    assert data["title"] == payload["title"]

    assert data["body"] == payload["body"]


def test_invalid_post():
    response = requests.get(f"{BASE_URL}/posts/999999")

    assert response.status_code == 404 or response.json() == {}
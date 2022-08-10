# Lời đầu tiên cho phép tôi xin được gửi đến quý vị lời chào trân trọng nhất

Đây là dự án [Laravel](https://laravel.com/) cơ bản nhất dùng để tham khảo, tại đây tôi không dùng Repository hay bất cứ cấu trúc phức tạp nào.

## Lưu ý

Vui lòng đọc kỹ hướng dẫn sử dụng trước khi dùng. Hãy tỏ ra là người khôn ngoan có hiểu biết và biết hợp tác.

## Bắt đầu

Chạy lệnh:

```bash
cp .env.example .env
```

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

Đặt lệnh tắt gõ cho lẹ chứ hơi đâu mỗi lần muốn chạy cái gì phải gõ `./vendor/bin/sail`

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

```bash
sail composer install
```

```bash
sail artisan key:generate
```

Cài đặt các packages và build

```bash
sail npm install && sail npm run dev
```

## Tôi có cài đặt đầy đủ môi trường, ứ dùng docker

Bạn không dùng docker (cụ thể ở đây là laravel sail)? Chiều bạn luôn.

Trước hết chạy lệnh tạo file chứa các biến môi trường

```bash
cp .env.example .env
```

Cài đặt các package thông qua composer

```bash
composer install
```

```bash
php artisan key:generate
```

```bash
npm install && npm run dev
```

## Cấu hình thông tin kết nối database trong .env

```text
DB_CONNECTION // mặc định là mysql
DB_HOST // mặc định là localhost (Nếu dùng docker thì tên của database service trong docker-compose.yml)
DB_PORT // Mặc định của mysql là 3306, postgres là 5432
DB_DATABASE // Tên database
DB_USERNAME // Username
DB_PASSWORD // Password (tốt nhất nên đặt pass không nên để trống)
```

Chạy lệnh tạo database và thêm dữ liệu mẫu:

```bash
sail artisan migrate --seed
# hoặc không dùng sail
php artisan migrate --seed
```

## Truy cập và quản lý database thông qua adminer

Truy cập vào [đường dẫn](http://localhost:8084/?server=mysql&username=sail)

_Chống chỉ định đối với phụ nữ đang mang thai và trẻ em đang bú_

**Thân ái chào đoàn kết và quyết thắng. Nhớ đánh răng trước khi đi ngủ - Vì 1 thế giới không sâu răng**

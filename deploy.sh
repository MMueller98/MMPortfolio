echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* marius@217.160.70.174:/var/www/muellermarius.com/

echo "Done!"

# sudo find /var/www/muellermarius.com -type d -exec chmod 755 {} \;
# sudo find /var/www/muellermarius.com -type f -exec chmod 644 {} \;
# systemctl restart nginx
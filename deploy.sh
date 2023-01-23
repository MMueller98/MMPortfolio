echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* marius@217.160.70.174:/var/www/muellermarius.com/

echo "Done!"
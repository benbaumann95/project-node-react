function localtunnel {
  lt -s randomsubdomainohyeah1995 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

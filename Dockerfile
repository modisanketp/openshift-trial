FROM rhel7:7.3
CMD bash -c "while true; do (( i++ )); echo test \$i; sleep 5; done"
